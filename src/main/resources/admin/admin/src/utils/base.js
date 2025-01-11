const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot18525/",
            name: "springboot18525",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot18525/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园医疗保险管理系统"
        } 
    }
}
export default base
