export default ({ app, redirect }) => {
    // В переменной роутс указывайте пути которые не должны входить не авторизованные пользователи

    const routes = [
        'profile',
        'menin-kurstarym',
        'menin-olimpiadalarym',
        'menin-qmjlarym',
        'menin-atestacialarym',
        'menin-materialdarym',
        'menin-seminarlarym',
        'menin-baiqaularym',
        'menin-turnirlerim',
        'menin-kornekilikterim',
        'menin-zhurnaldarym',
        'menin-testterim',
        'zharialau',
        'olimpiada-slug',
    ]
    app.router.beforeEach((to, from, next) => {
        var result = 0
        const user = app.$auth.user
        if(!user){
            routes.forEach(el => {
                if(to.name === el){
                    result = 1
                }
            })
        }
        result ? app.$bus.$emit('openLogin') : next();
    })
}
