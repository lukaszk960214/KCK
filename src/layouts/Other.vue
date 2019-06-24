<template>
  <v-container text-xs-center>
    <v-layout row>
        <v-flex xs12 md6>
            <v-card tile flat>
                <v-card-text>
                    <div style="background-color: red; height: 800px;">{{results[0]}}</div>
                </v-card-text> 
            </v-card>
        </v-flex>
        <v-flex xs6 hidden-sm-and-down>
            <v-layout row wrap align-center>
                <v-flex v-for="i in 6" :key="i" sm6>
                    <v-card tile flat>
                        <v-card-text>
                            <div style="background-color: pink; height: 245px;">{{results[i]}}</div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                silnia: 1,
                results: []
            }
        },
        methods: {
            fsilnia: function(n) {
                if ((n == 0) || (n == 1)) {
                    this.results.push(1);
                    return 1;
                } else {
                    var result = (n * this.fsilnia(n-1));
                    this.results.push(result);
                    return result;
                }
            }
        },
        mounted() {
            this.silnia = this.fsilnia(7)
        },
        watch: {
            silnia: function(){
                console.log(this.silnia)
            }
        }
    }
    
</script>