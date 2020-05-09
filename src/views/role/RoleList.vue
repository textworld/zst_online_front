<template>
  <a-card :bordered="false" :style="{ height: '100%' }">
    <p>title</p>
    <a-row :gutter="24">
      <a-col :md="4">
        <a-list itemLayout="vertical" :dataSource="groups">
          <a-list-item slot="renderItem" slot-scope="item, index" :key="index">
            <a-list-item-meta :style="{ marginBottom: '0' }">
              <span slot="description" style="text-align: center; display: block">{{ item.name }}</span>
              <a slot="title" style="text-align: center; display: block" @click="edit(item)">{{ item.name }}</a>
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
      <a-col :md="20">
        <div style="max-width: 800px">
          <a-divider v-if="isMobile()" />
          <div v-if="mdl.id">
            <h3>角色：{{ mdl.name }}</h3>
          </div>
          <a-form :form="form" :layout="isMobile() ? 'vertical' : 'horizontal'">
            <a-form-item label="角色名称">
              <a-input v-decorator="[ 'name', {rules: [{ required: true, message: 'Please input role name!' }]} ]" placeholder="请填写角色名称" />
            </a-form-item>

            <a-form-item label="拥有权限">
              <a-row :gutter="16" v-for="(permission, index) in permissions" :key="index">
                <a-col :xl="4" :lg="24">
                  {{ permission.model }}
                </a-col>
                <a-col :xl="20" :lg="24">
                  <a-checkbox
                    v-if="permission.actionsOptions.length > 0"
                    :indeterminate="permission.indeterminate"
                    :checked="permission.checkedAll"
                    @change="onChangeCheckAll($event, permission)">
                    全选
                  </a-checkbox>
                  <a-checkbox-group :options="permission.actionsOptions" v-model="permission.selected" @change="onChangeCheck(permission)" />
                </a-col>
              </a-row>
            </a-form-item>

          </a-form>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>

<script>
import { getGroups, getContentTypes } from '@/api/manage'
import { mixinDevice } from '@/utils/mixin'
// import { actionToObject } from '@/utils/permissions'
import pick from 'lodash.pick'

export default {
  name: 'RoleList',
  mixins: [mixinDevice],
  components: {},
  data () {
    return {
      form: this.$form.createForm(this),
      mdl: {},

      permissions: [],
      groups: []
    }
  },
  created () {
    getGroups().then((res) => {
      this.groups = res.result
      this.groups.push({
        id: '-1',
        name: '新增角色'
      })
    })
    this.loadPermissions()
  },
  methods: {
    callback (val) {
      console.log(val)
    },

    add () {
      this.edit({ id: 0 })
    },

    edit (record) {
      this.mdl = Object.assign({}, record)
      // 有权限表，处理勾选
      if (this.mdl.permissions && this.permissions) {
        this.permissions.forEach(contentType => {
          const selected = []
          this.mdl.permissions.forEach(permission => {
            if (permission.content_type.id === contentType.id) {
              selected.push(permission.id)
            }
          })
          contentType.selected = selected
          this.onChangeCheck(contentType)
        })
        console.log('this.permissions', this.permissions)
      }

      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.mdl, 'id', 'name'))
      })
      console.log('this.mdl', this.mdl)
    },

    onChangeCheck (permission) {
      permission.indeterminate = !!permission.selected.length && (permission.selected.length < permission.actionsOptions.length)
      permission.checkedAll = permission.selected.length === permission.actionsOptions.length
    },
    onChangeCheckAll (e, permission) {
      console.log('permission:', permission)

      Object.assign(permission, {
        selected: e.target.checked ? permission.actionsOptions.map(obj => obj.value) : [],
        indeterminate: false,
        checkedAll: e.target.checked
      })
    },
    loadPermissions () {
      getContentTypes().then(res => {
        const result = res.result
        this.permissions = result.map(contentType => {
          contentType.selected = []
          contentType.indeterminate = false
          contentType.checkedAll = false
          contentType.actionsOptions = contentType.permissions.map(permission => {
            return {
              label: permission.name,
              value: permission.id
            }
          })
          return contentType
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
