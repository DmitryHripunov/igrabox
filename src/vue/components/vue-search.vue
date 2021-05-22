<template>
  <form class="vue-search" :action="urlForm" method="GET">
    <vue-simple-suggest
      v-model="phrase"
      :list="suggestionList"
      @select="onSuggestSelect"
      :max-suggestions="4"
      :debounce="200"
      :min-length="3"
      ref="suggest"
    >

    <template slot="misc-item-above" slot-scope="scope">
      <div class="vue-search__wrapper" v-if="isLoading"></div>

      <div
        class="autocomplete-search__item vue-search__label vue-search__label_danger"
          v-else-if="error"
      >
        {{ error }}
      </div>
      <div class="autocomplete-search__item vue-search__label" v-else-if="count === 0">
          Ничего не найдено :(
      </div>
    </template>

    <input 
      :placeholder="placeholder"
      type="search" 
      class="vue-search__input" 
      autocomplete="off" 
      ref="input" 
    />

    <button type="submit" class="vue-search__btn">
      <svg class="vue-search__svg">
        <use xlink:href="#search"></use>
      </svg>
    </button>

      <div slot="suggestion-item" slot-scope="scope">
        <a
          :href="scope.suggestion.href || '#'"
          v-html="boldenSuggestion(scope)"
          class="autocomplete-search__item">
        </a>
      </div>

      <div slot="misc-item-below" slot-scope="scope">
        <div class="vue-search__bottom" v-if="!isLoading && count > 0">
          <a :href="pathShowAll" class="vue-search__link">
              Все результаты ({{ count }})
          </a>
        </div>
      </div>

    </vue-simple-suggest>
  </form>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";

export default {
  name: "vue-search",

  components: {
    VueSimpleSuggest,
  },

  props: {
    urlAjax: {
      type: String,
      default: "/api/search/",
    },
    urlForm: {
      type: String,
      default: "/search/",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },

  data() {
    return {
      phrase: "",
      isLoading: false,
      count: null,
      error: null,
    };
  },

  watch: {
    isVisible(val) {
      if (val) {
        this.$refs.input.focus();
      }
    },
  },

  computed: {
    pathShowAll() {
      return `${this.urlForm}?phrase=${this.phrase}`;
    },
  },

  methods: {
    async suggestionList() {
      this.isLoading = true;
      this.count = null;
      this.error = null;

      try {
        const response = await this.axios({
          url: this.urlAjax,
          params: {
            phrase: this.phrase,
          },
        });

        this.count = response.data.count;
        return response.data.results;
      } catch (err) {
        console.error(err);
        this.error = err.response.data.message || "Потеряна связь с сервером";
      } finally {
        this.isLoading = false;
      }

      this.count = 0;
      return [];
    },
    onSuggestSelect({ href }) {
      window.location.href = href;
    },
    boldenSuggestion(scope) {
      if (!scope) {
        return scope;
      }
      const { suggestion, query } = scope;
      const result = suggestion.title;
      if (!query) return result;
      const texts = query.split(/[\s-_/\\|.]/gm).filter((t) => !!t) || [""];
      return result.replace(
        new RegExp(`(.*?)(${texts.join("|")})(.*?)`, "gi"),
        '$1<b class="highlight">$2</b>$3'
      );
    },
  },
};
</script>

<style lang="less">
@import (reference) "../../less/variables.less";

.vue-simple-suggest {
  .designed {
  width: 100%;
  }

  ul.suggestions li {
    padding: 12px 16px;
    transition: background-color .2s ease;
    font-size: 12px;
    line-height: 18px;
  }

  ul.suggestions li:last-child:not(.suggest-item) .vue-search__link {
    font-weight: 700;
    cursor: pointer;
  }

  ul.suggestions li.suggest-item:hover {
    background-color: rgba(150, 133, 138, 0.3);
    cursor: pointer;
  }

  ul.suggestions li:first-child {
    margin-bottom: 0;
  }

  ul.suggestions li:last-child {
    margin-bottom: 0;
  }

} 

.vue-search {
  position: relative;

  .suggestions {
    background-color: #ffffff;
    border-radius: 16px;
    border-bottom: solid 2px #eaeaea;
    border-right: solid 2px #eaeaea;
    border-left: solid 2px #eaeaea;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    z-index: 3;
    max-width: 100%;
    height: 220px;
    overflow-y: auto;
  }

  position: relative;
  width: 100%;

  &__btn {
    display: none;
  }

  &__svg {
    fill: @color-gray;
  }

  &__input {
    width: 100%;
    height: 40px;
    border-radius: 16px;
    border: solid 2px #eaeaea;
    outline: none;
    font-size: 15px;
    appearance: none;
    color: @canvas-text;
    padding: 0 16px;

    &::placeholder {
      color: @canvas-text;
    }
  }
}

@media (min-width: @laptop) {
  .vue-search {
    &__input {
      padding-right: 40px;

      &::-webkit-search-cancel-button {
        display: none;
      }
    }

    &__btn {
      cursor: pointer;
      position: absolute;
      display: block;
      width: 24px;
      height: 24px;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background-color: transparent;
    }

    &__svg {
      width: 100%;
      height: 100%;
    }

    .autocomplete-search__item.vue-search__label.vue-search__label_danger:hover,
    .autocomplete-search__item.vue-search__label:hover {
      cursor: auto;
      background-color: unset;
    }

    .vue-simple-suggest-enter-active.suggestions,
    .vue-simple-suggest-leave-active.suggestions {
      max-height: 500px;
      transition: max-height 0.2s ease-out;
    }

    .vue-simple-suggest-enter.suggestions,
    .vue-simple-suggest-leave-to.suggestions {
      max-height: 0;
    }
  }
}
</style>
