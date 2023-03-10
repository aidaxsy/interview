module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
       //在rules中添加自定义规则
       //关闭组件命名规则
       "vue/multi-word-component-names":"off",
       // 官方建议设置添加组件命名忽略规则
            // 添加组件命名忽略规则
        // "vue/multi-word-component-names": ["error",{
        //   "ignores": ["Home","User"]  //在这个数组中加入需要忽略的组件名
        // }]
        'no-irregular-whitespace': process.env.NODE_ENV === 'production' ? 'error' : 'off',
       //这禁止掉 空格报错检查
 
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  }
  
  