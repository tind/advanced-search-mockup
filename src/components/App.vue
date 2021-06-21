<template>
    <div class="container">
        <div class="header">
            <h2>Advanced Search</h2>
            <small>Simple advanced search wireframe/mockup.</small>
        </div>
        <div class="main">
            <div>Search 115 records for:</div>
            <div class="search-clause-wrapper">
                <clause v-for="clause in clauses" :key="clause.ident" :ident="clause.ident"></clause>
            </div>
            <div class="search-actions">
                <button id="add-clause" type="button" @click="addClause">Add clause</button>
                <button id="remove-clause" type="button" :disabled="!atLeastOneClause" @click="removeClause">Remove clause</button>
                <button id="search" type="button">Search</button>
            </div>
        </div>
    </div>
</template>

<script>
let counter = 0;
export default {
    data() {
        return {
            clauses: [{ident: counter++}]
        }
    },
    computed: {
        atLeastOneClause() {
            return this.clauses.length > 1
        }
    },
    methods: {
        addClause() {
            console.log(this.clauses);
            this.clauses.push({ident: counter++});
        },
        removeClause() {
            this.clauses.pop();
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1000px;
    margin: auto;
}

.header {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
}

.main {
    margin-top: 10px;
    display: grid;
    row-gap: 10px;
}

.search-actions {
    display: grid;
    max-width: 250px;
    grid-template-columns: auto auto;
    column-gap: 10px;
    row-gap: 10px;
}

.search-clause-wrapper {
    display: grid;
    row-gap: 10px;
}
</style>
