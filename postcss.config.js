module.exports = {
    plugins: [
       require("postcss-cssnext")(),
       require("postcss-px2rem")({
            remUnit: 37.5
       }),
       require("cssnano")()
    ]
}