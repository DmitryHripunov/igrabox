<template>
  <div class="vue-range">
    <div class="vue-range__container">
      <input
        id="min-price"
        class="vue-range__input"
        type="number"
        v-model="minValue"
        :name="nameMin"
      >

      <span class="vue-range__separator"></span>

      <input
        id="max-price"
        class="vue-range__input"
        type="number"
        v-model="maxValue"
        :name="nameMax"
      >

      <span class="vue-range__course">₽</span>
    </div>

    <vue-slider
      v-model="value"
      :height="2"
      :min="min"
      :max="max"
      :interval="interval"
      :tooltip="false"
      :bgStyle="{ backgroundColor: '#eaeaea' }"
      :processStyle="{ backgroundColor: '#0697db' }"
      ref="slider"
    >
    <div class="vue-range__dot" slot="dot"></div>
    </vue-slider>
  </div>
</template>

<script>
  import VueSlider from 'vue-slider-component';
  
  export default {
    name: 'vue-range',

    components: {
      VueSlider,
    },

    props: {
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        required: true,
      },
      start: {
        type: Number,
        default: 0,
      },
      end: {
        type: Number,
        default() {
          return this.max;
        },
      },
      interval: {
        type: Number,
        default: 1000,
      },
      nameMin: {
        type: String,
        default: 'min',
      },
      nameMax: {
        type: String,
        default: 'max',
      },
    },

    data() {
      return {
        value: [0, 0],
      };
    },

    computed: {
      minValue: {
        get() {
          return this.value[0];
        },
        set(value) {
          let newValue = this.checkValue(value);
          newValue = newValue > this.value[1] ? this.value[1] : newValue;

          this.$refs.slider.setValue([newValue, this.value[1]]);
          this.$forceUpdate();
        },
      },
      maxValue: {
        get() {
          return this.value[1];
        },
        set(value) {
          let newValue = this.checkValue(value);
          newValue = newValue < this.value[0] ? this.value[0] : newValue;

          this.$refs.slider.setValue([this.value[0], newValue]);
          this.$forceUpdate();
        },
      },
    },

    created() {
      if (this.start > this.max || this.end > this.max) {
        console.error('Текущее значение не может выше максимального'); // eslint-disable-line
      }

      this.value = [
        this.checkValue(this.start),
        this.checkValue(this.end),
      ];
    },

    methods: {
      reset() {
        this.$refs.slider.setValue([this.min, this.max]);
      },
      refreshSlider() {
        this.$refs.slider.refresh();
      },
      checkValue(value) {
        let result = value > this.max ? this.max : value;
        result = result < this.min ? this.min : result;

        return result;
      },
    },
  };
</script>

<style lang="less">
  @import (reference) '../../less/variables.less';

  .vue-range {
    width: 100%;

    &__container {
      display: flex;

      justify-content: flex-start;
      align-items: center;
      margin-bottom: 16px;
    }

    &__input {
      box-sizing: border-box;
      width: 100%;
      max-width: 104px;
      height: 40px;
      padding: 0 8px 0 16px;
      text-align: left;
      font-size: 15px;
      font-family: "Rubik";
      border: 2px solid #e0e0e0;
      border-radius: 16px;
      outline: none;

      color: @color-gray;

      -moz-appearance: textfield;
    }

    &__separator {
      width: 100%;
      max-width: 16px;
      height: 2px;
      background-color: #d6d6d6;
      margin: 0 16px;
    }

    &__course {
      font-size: 18px;
      font-weight: 500;
      margin-left: 8px;
    }

    &__input:focus {
      border-color: @canvas-text;
    }

    // отключение стрелок у input type="number"
    &__input::-webkit-outer-spin-button,
    &__input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &__dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: @color-blue;
    }
  }
  
</style>
