<template>
<div class="signup">
    <h1>登录页面</h1>
    <div class="signup-content">
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="Login"
        >
            <a-form-item>
                <a-input
                    v-decorator="[
                    'userName',
                    { rules: [{ required: true, message: 'Please input your username!' }] },
                    ]"
                    placeholder="用户名"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item prop="phoneNumber">
                <a-input
                    v-decorator="[
                    'phone',
                    { rules: [
                        { required: true, message: '请输入电话号码' ,},
                        { max:11, message: '请输入11位数字'},
                        {pattern:/^(135|186)\d{8}$/, message: '请以135或186开头'},
                        {validator: handlePass}
                    ] },
                    ]"
                    type="phone"
                    placeholder="电话号码"
                >
                    <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="[
                    'email',
                    { rules: [
                        { required: true, message: '邮箱不能为空' ,},
                        {validator: handlePass}
                    ]
                    },
                    ]"
                    type="email"
                    placeholder="邮箱账号"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                    v-decorator="[
                    'remember',
                    {
                        valuePropName: 'checked',
                        initialValue: true,
                    },
                    ]"
                >
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    登录
                </a-button>
                Or
                <a href="">
                    register now!
                </a>
            </a-form-item>
        </a-form>
    </div>
</div>

</template>

<script>


export default {
    
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    data() {
        return {
            // form:{
            //     reporterTel:{}
            // },
            // rules: {
            //     phoneNumber: [{validator:this.teltest(), trigger: 'blur'}]
            // },
        }
    },
    methods: {

        handlePass(rule, value, callback) {
            this.password = value;
            callback();
        },
        Login(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                
                }
            });
        },
    },
}
</script>
<style lang='scss' scoped>
.signup-content{
    width: 500px;
    height: 520px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -260px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>