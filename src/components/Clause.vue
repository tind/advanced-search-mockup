<template>
    <div class="search-clause">
        <select :name="`matchtype${ident}`" :id="`matchtype${ident}`" :aria-label="`Match type (${ident})`">
          <option value="all">All of the words</option>
          <option value="any">Any of the words</option>
        </select>
        <input type="text" :name="`query${ident}`" :id="`query${ident}`" :aria-label="`Query(${ident})`" placeholder="Search query" autocomplete="off">
        <select :name="`field${ident}`" :id="`field${ident}`" :aria-label="`Field (${ident})`">
          <option value="any">Any field</option>
          <option value="author">Author</option>
        </select>
        <select :name="`operator${ident}`" :id="`operator${ident}`">
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['ident']
}
</script>

<style scoped>
.search-clause {
    display: grid;
    column-gap: 10px;
    row-gap: 10px;
}

@media (max-width: 767px) {
    .search-clause {
        grid-template-columns: auto auto auto;
        grid-auto-flow: row dense;
        padding-bottom: 10px;
        border-bottom: 1pt dashed #ddd;
    }

    .search-clause:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }

    .search-clause input[type=text] {
        grid-column-start: 1;
        grid-column-end: 4;
    }
}

@media (min-width: 768px) {
    .search-clause {
        grid-template-columns: 150px auto 100px 100px;
    }
}
</style>
