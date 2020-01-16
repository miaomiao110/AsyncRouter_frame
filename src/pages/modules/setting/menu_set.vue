<template>
    <div class="menu_set_container">
        <!-- menu_setting <br> -->
        <!-- <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :render-content="renderContent">
        </el-tree> -->
        <!-- {{router_init_to_table}} -->
        {{init_router}} <br>
        {{current_routes}} <br>
            <el-button type="danger" size="medium" @click="Add_root_router_handler">添加路径</el-button>
            <!-- table -->
            <el-table
            :data="current_routes"
            style="width: 100%;"
            row-key="path"
            border
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            > 
            <!-- default-expand-all -->
            <!-- <el-table-column
                label="#"
                width="240">
                <template #default="scope">
                    {{scope.row}}
                    <i v-if="!ccc" class="el-icon-caret-right" style="font-size:22px;" @click="ccc = 1"></i>
                    <i v-else class="el-icon-caret-bottom" style="font-size:22px;" @click="ccc = 0"></i>
                </template>
            </el-table-column>             -->
            <el-table-column
                prop="path"
                label="路径"
                width="400"
                sortable>
            </el-table-column>
            <el-table-column
                prop="name"
                label="名称"

                sortable>
            </el-table-column>
            <!-- <el-table-column
                prop="meta.roles[0]"
                label="角色1"
                width="180">
            </el-table-column>
            <el-table-column
                prop="meta.roles[1]"
                label="角色2"
                width="180">
            </el-table-column> -->
            <el-table-column
                label="操作"
                width="240">
                <template #default="scope">
                    <!-- {{scope.row}} -->
                    <el-button type="primary" icon="el-icon-edit" circle @click="modify_router_handler"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="delete_router_handler(scope.row.path)"></el-button>
                    <el-button type="success" round @click="Add_zi_router_handler(scope.row)">添加子路由</el-button>
                </template>
            </el-table-column>
            </el-table>
            <!-- /table -->
            <!-- dialog 1 -->
                <el-dialog
                title="Add Router / Path"
                :visible.sync="RootformVis"
                width="30%"
                >
                <!-- <span>这是一段信息</span> -->
                <!-- Form -->
                {{Rootform}}
                    <el-form label-position="top" label-width="80px" :inline="true" :model="Rootform" class="demo-form-inline">
                    <el-form-item label="Path：">
                        <el-input v-model="Rootform.path" placeholder="设置路径"></el-input>
                    </el-form-item>
                    <el-form-item label="Name：">
                        <el-input v-model="Rootform.name" placeholder="设置名称"></el-input>
                    </el-form-item>
                    <el-form-item label="Link：">
                        <el-input v-model="Rootform.link" placeholder="设置链接"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Role1：admin">
                        <el-select v-model="Rootform.meta.roles[0]" placeholder="添加角色权限">
                        <el-option label="是" value="admin"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Role2：editor">
                        <el-select v-model="Rootform.meta.roles[1]" placeholder="添加角色权限">
                        <el-option label="是" value="editor"></el-option>
                        <el-option label="否" value=""></el-option>
                        </el-select>
                    </el-form-item> -->
                    <!-- <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item> -->
                    </el-form>
                <!-- /Form -->
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submit_RootRouter_handler">确 定</el-button>
                </span>
                </el-dialog>
            <!-- /dialog 1 -->
            <!-- dialog 2 -->
                <el-dialog
                title="Add Router / Path ( Children )"
                :visible.sync="ChildrenformVis"
                width="30%"
                >
                <!-- <span>这是一段信息</span> -->
                <!-- Sorm -->
                <!-- {{sorm}} -->
                    <el-form label-position="top" label-width="80px" :inline="true" :model="Childrenform" class="demo-form-inline">
                    <el-form-item label="Path：">
                        <el-input v-model="Childrenform.path" placeholder="设置子路径"></el-input>
                    </el-form-item>
                    <el-form-item label="Name：">
                        <el-input v-model="Childrenform.name" placeholder="设置名称"></el-input>
                    </el-form-item>
                    <el-form-item label="Link：">
                        <el-input v-model="Childrenform.link" placeholder="设置链接"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Role1：admin">
                        <el-select v-model="form.meta.roles[0]" placeholder="添加角色权限">
                        <el-option label="是" value="admin"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Role2：editor">
                        <el-select v-model="form.meta.roles[1]" placeholder="添加角色权限">
                        <el-option label="是" value="editor"></el-option>
                        <el-option label="否" value=""></el-option>
                        </el-select>
                    </el-form-item> -->
                    </el-form>
                <!-- /Sorm -->
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submit_ChildrenRouter_handler">确 定</el-button>
                </span>
                </el-dialog>
            <!-- /dialog 2 -->
    </div>
</template>

<script>
import {routes} from "@/router/index.js"
import lodash from "lodash"

export default {
    data(){
        return {
            current_routes:routes,
            ccc:0,
            init_router:[],
            RootformVis:false, //根路由模态框 显示/关闭
            Rootform:{path:"/"}, //根路由form数据
            ChildrenformVis:false, //子路由模态框 显示/关闭
            Childrenform:{},//子路由form数据
            add_children_router_data_storage:"", //set 一个添加子路由时，将选中的row数据存放在这里
            children_level:1, //find menu level
            menu_index_i:"null",
            menu_index_j:"null"


        }
    },
    created(){
        // this.router_init_to_table()
    },
    computed:{

    },
    methods:{
        Add_root_router_handler(){
            this.RootformVis = true
        },
        Add_zi_router_handler(v){
            this.Childrenform = {}//clear form-data
            this.add_children_router_data_storage = v//放入数据
            this.ChildrenformVis = true //模态框显示
        },
        delete_router_handler(path){
            
        },
        modify_router_handler(){

        },
        router_init_to_table(){
            this.init_router = _.clone(this.current_routes)

            for(let c in this.init_router){
                if(this.init_router[c].children&&this.init_router[c].children.length !== 0){
                    // console.log(c)
                    // for(let v of this.init_router[c].children){
                    //     this.init_router.splice( c+1 , 0 , v)
                    // }
                    for(let i = 0;i<this.init_router[c].children.length;i++){
                        this.init_router.splice( c + i + 1 , 0 , this.init_router[c].children[i])
                        console.log(this.init_router[c].children[i])
                    }
                    this.init_router[c].children = []
                }
            }
            console.log(this.init_router)
        },
        // 提交根路由form
        submit_RootRouter_handler(){
            this.check_repeat_Rootrouter()
            routes.push(this.Rootform)
        },
        // 检查根重复路由-函数
        check_repeat_Rootrouter(){

        },
        // 提交子路由form
        submit_ChildrenRouter_handler(){
            this.check_repeat_Childrenrouter()
            // console.log(this.add_children_router_data_storage.path)
            this.children_level = 1  //1代表root  1级菜单
            // do{
                // 1级菜单find index
                var zi_router_index = _.findIndex(routes,(item) =>{
                    return item.path == this.add_children_router_data_storage.path
                })
                // console.log(zi_router_index)
                // if 1级找不到 ，2级菜单 find index 并保存 i/this.menu_index_i
                if(zi_router_index == -1){alert(1)
                    this.children_level = 2 //二级菜单
                    for(let i = 0;i<routes.length;i++){
                        zi_router_index = _.findIndex(routes[i].children||[],(item) =>{
                            console.log(item.path == this.add_children_router_data_storage.path)
                            return item.path == this.add_children_router_data_storage.path
                        })
                        console.log("ccccccccc",zi_router_index)
                        if(zi_router_index !== -1){
                            this.menu_index_i = i
                            break;
                        }                        
                    }

                }
                // if 1、2级找不到 ，3级菜单 find index 并保存 i/this.menu_index_i/this.menu_index_j
                if(zi_router_index == -1){
                    this.children_level = 3 //三级菜单
                    for(let i = 0;i<routes.length;i++){
                        if(routes[i].children)
                        for(let j = 0;j<routes[i].children.length;j++){
                            zi_router_index = _.findIndex(routes[i].children[j].children||[],(item) =>{
                                // console.log(item.path == this.add_children_router_data_storage.path)
                                return item.path == this.add_children_router_data_storage.path
                            })
                            // console.log("ccccccccc",zi_router_index)
                            if(zi_router_index !== -1){
                                this.menu_index_i = i
                                this.menu_index_j = j
                                break;
                            }                        
                        }
                    }

                }
                // console.log(zi_router_index); console.log(this.menu_index_i,this.menu_index_j) ;console.log(this.children_level)
            // }while(zi_router_index == -1)

            console.log(zi_router_index,this.children_level)

            //  初始化子路由
            // routes[zi_router_index].children = routes[zi_router_index].children||[]
            //  加入子路由
                //check router level
                if(this.children_level == 1)
                    {alert(1)
                        // 添加children属性 如果没有的话
                        if(!routes[zi_router_index].children)
                        routes[zi_router_index].children = []
                        routes[zi_router_index].children.push(this.Childrenform)
                    }
                if(this.children_level == 2)
                    {alert(2)
                        if(!routes[this.menu_index_i].children[zi_router_index].children)
                        routes[this.menu_index_i].children[zi_router_index].children = []
                        routes[this.menu_index_i].children[zi_router_index].children.push(this.Childrenform)
                    }
                if(this.children_level == 3)
                    {alert(3)
                        if(!routes[this.menu_index_i].children[this.menu_index_j].children[zi_router_index].children)
                        routes[this.menu_index_i].children[this.menu_index_j].children[zi_router_index].children = []
                        routes[this.menu_index_i].children[this.menu_index_j].children[zi_router_index].children.push(this.Childrenform)
                    }
            // lodash强制刷新数据
                this.current_routes = _.clone(this.current_routes)
                // routes = _.clone(routes)
                //refresh page
                // this.$router.go(0)
            // 关闭Modal
            this.ChildrenformVis = false
        },
        // 检查子重复路由-函数
        check_repeat_Childrenrouter(){

        }
    }
}
</script>

<style scoped>

</style>