<template>
  <vxe-grid ref="blogListTable" v-bind="gridBlogList">
    <template #category="{row}">
      <el-dropdown>
        <el-button type="success" plain>
          {{ row.categoryNames[0] ? row.categoryNames[0] : 'NULL' }}
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-button type="success" plain v-for="(category, index) in filteredCategories(row)" :key="index">{{category}}</el-button>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </template>
    <template #operate="{row}">
      <el-button type="primary" plain @click="contentDetail(row.id)">查看</el-button>
      <el-button type="warning" plain>编辑</el-button>
      <el-button type="danger" plain>删除</el-button>
    </template>
  </vxe-grid>
</template>

<script>
import {getBlogList} from "@/axios/api";
import {dataFormat} from "@/assets/css/CommonJs";
import {router} from "@/router";

export default {
  data() {
    return {
      gridBlogList: {
        border: true,
        showHeaderOverflow: true,
        showOverflow: true,
        keepSource: true,
        // id: 'full_edit_1',
        rowId: 'id',
        rowConfig: {
          isHover: true
        },
        columnConfig: {
          resizable: true
        },
        sortConfig: {
          trigger: 'cell',
          remote: true
        },
        pagerConfig: {
          pageSize: 15,
          pageSizes: [10,15, 20, 30, 40, 100, 1000, 10000]
        },
        checkboxConfig: {
          labelField: 'id',
          reserve: true,
          highlight: true,
          range: true
        },
        proxyConfig: {
          // seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
          sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
          filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
          // form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
          props: {
            result: "object.list",
            total: "object.total"
          },
          ajax: {
            query: ({page, sorts, filters, form}) => {
              const queryParams = Object.assign({}, form)
              // 处理排序条件
              const firstSort = sorts[0]
              if (firstSort) {
                queryParams.sortField = firstSort.property
                queryParams.orderBy = firstSort.order
              }
              // 处理筛选条件
              filters.forEach(({property, values}) => {
                queryParams[property] = values.join(',')
              })
              return getBlogList({pageNum: page.currentPage, pageSize: page.pageSize,...queryParams}).then(response => {
                    return response.data
                  }
              ).catch(error => {
                throw error
              })
            }
          }

        },
        columns: [
          { type: 'checkbox', title: 'ID', width: 120 ,align:"center"},
          // { type: 'seq', title: 'ID', width: 120 ,align:"center"},
          {field: 'title', title: '文章名',align:"center",showOverflow:"ellipsis"},
          {field: 'content', title: '内容',align:"center",showOverflow:"ellipsis"},
          {title: '分类',align:"center",slots: {default: "category"}},
          {field: 'createTime', title: '创建时间',align:"center",width: 200,sortable:true,formatter:(value)=>dataFormat(value)},
          {field: 'updateTime', title: '修改时间',align:"center",width:200,sortable:true,formatter:(value)=>dataFormat(value)},
          {title: '操作',align:"center",width:250,slots:{default:"operate"}}
        ]
      }
    }
  },
  methods: {
    contentDetail(id) {
      console.log("-=-=-=-=-=-=-=-=")
      router.push({name: "blogContentEdit",params:{id:id}})
    },
    filteredCategories(row) {
      if (row.categoryNames.length > 0) {
        return row.categoryNames.slice(1)
      }
      return row.categoryNames
    }
  }
}
</script>
