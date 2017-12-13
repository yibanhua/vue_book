function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
};
//().test(value +'')
Vue.component('input-number',{
    template: '<div class="input-number">' +
    '<input type="text"' +
    ':value="currentValue"' +
    '@change="handleChange"' +
    '@keyup.up="handleUp"  ' +
    '@keyup.down="handleDown">' +
    '<button @click="handleDown" :disabled="currentValue<=min">-</button>' +
    '<button @click="handleUp"   :disabled="currentValue>=max">+</button>' +
    '<input type="text" ' +
    ':value="propStep"' +
    '@change="propSteps">' +
    '</div>',
    props: {
        max:{
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        },
        prop_step: {
            type: Number,
            default: 5
        }
    },
    data: function () {
        return {
            currentValue: this.value,
            propStep: this.prop_step
        }
    },
    watch: {
        currentValue: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        propStep: function (val) {
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function (val) {
            this.updateValue(val);
        },
        prop_step: function (val) {
            this.updatePropStep(val);
        }
    },
    methods: {
        handleDown: function () {
            if (this.currentValue <= this.min) return;
            this.currentValue -= this.propStep;
        },
        handleUp: function () {
            if (this.currentValue >= this.max) return;
            this.currentValue += this.propStep;
        },
        handleChange: function (event) {
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;
            if (isValueNumber(val)) {
                val = Number(val);
                this.currentValue = val;
                if (val > max) {
                    this.currentValue = max;
                } else if (val < min) {
                    this.currentValue = min;
                } else {
                    event.target.value = this.currentValue;
                }
            }
        },
        propSteps: function (event) {
            var step = event.target.value.trim();

            if (isValueNumber(step)) {
                step = Number(step);
                this.propStep = step;
            }
        },
        updateValue: function (val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        updatePropStep: function (val) {
            this.propStep = val;
        }
    },
    mounted: function () {
        this.updateValue(this.value);
        this.updatePropStep(this.prop_step);
    }


});