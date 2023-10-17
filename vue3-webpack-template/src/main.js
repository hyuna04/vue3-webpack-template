import { createApp } from 'vue'
import App from './App'
//import App from './App.vue'에서 .vue라는 확장자를 지운 후 저장하면 에러발생
//당연히 파일에 확장자가 명시가 안돼있기 때문에 어떤 파일인지 알 수 없기 때문임
//-> 이 부분을 webpack을 통해서 개선 할 수 있음
//->module.exports = {
// resolve: {
//     extensions: ['.js', '.vue']
// },
//->이를 통해 확장자 명을 생략할 수 있음

createApp(App).mount('#app')