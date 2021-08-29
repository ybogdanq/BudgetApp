<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="left">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="form-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Income" value="INCOME"></ElOption>
          <ElOption label="Outcome" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment"/>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value"/>
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
    const checkValue = (rule, value, callback) => {
      if(!value || value === 0){
          return callback(new Error("Value can not be zero"))
      }
      else{
        callback()
      }
    }
    return {
      formData: {
        type: "INCOME",
        comment: '',
        value: 0,
      },
      rules: {
        type: [{required: true, message: 'Please select type', trigger: 'blur'}],
        comment: [{required: true, message: "Please enter comment", trigger: 'change'}],
        value: [
          {required: true, message: "Please enter value", trigger: 'change'},
          {type: "number", message: 'Value must be a number', trigger: "change"},
          {validator: checkValue, message: "Value can not be zero", trigger: 'change'},
        ]
      }
    }
  },
  props: {

  },
  methods: {
    onSubmit(){
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          const isConfirm = confirm("Would u like to confirm")
          if(isConfirm){
            this.$emit("submitForm", {...this.formData})
            this.$refs.addItemForm.resetFields()
          }
        }
      })
    },
  },

}
</script>

<style scoped>
.form-card{
  max-width: 500px;
  margin: 0 auto;
}
.form-select{
  width: 100%;
}
</style>