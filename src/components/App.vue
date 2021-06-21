<template>
    <div class="container">
        <div class="header">
            <h2 style="margin-top: 0">Advanced Search</h2>
            <small>Simple advanced search wireframe/mockup.</small>
        </div>
        <div class="search-options">
            <div>Search 115 records for:</div>
            <div class="search-clause-wrapper">
                <clause v-for="clause in clauses" :key="clause.ident" :ident="clause.ident"></clause>
            </div>
            <div class="search-actions">
                <button id="add-clause" type="button" :disabled="!belowThreeClauses" @click="addClause">Add clause</button>
                <button id="remove-clause" type="button" :disabled="!atLeastOneClause" @click="removeClause">Remove clause</button>
                <button id="search" type="button" @click="search">Search</button>
            </div>
        </div>
        <div class="search-results" v-if="results.length > 0">
            <result v-for="result in results" :key="result.ident" :ident="result.ident"></result>
        </div>
    </div>
</template>

<script>
let counter = 0;
export default {
    data() {
        return {
            clauses: [{ident: counter++}],
            results: []
        }
    },
    computed: {
        atLeastOneClause() {
            return this.clauses.length > 1
        },
        belowThreeClauses() {
            return this.clauses.length < 3
        }
    },
    methods: {
        addClause() {
            console.log(this.clauses);
            this.clauses.push({ident: counter++});
        },
        removeClause() {
            this.clauses.pop();
        },
        search() {
            this.results = [{ident: counter++}];
        }
    }
}
</script>

<style>
body {
    background-color: #f5f5f5;
    font-family: sans-serif;
}

.container {
    max-width: 1000px;
    margin: auto;
    display: grid;
    row-gap: 10px;
}

.header, .search-options, .search-results {
    background-color: #fff;
    padding: 10px;
}

.search-options {
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
