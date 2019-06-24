<template>
    <v-container fluid>
        <router-link to="/" tag="btn">
            <v-btn flat>Youtube</v-btn>
        </router-link>
        <router-link to="/" tag="btn">
            <v-btn outline round color="white" class="hidden-md-and-down">
                Strona główna
            </v-btn>
        </router-link>
        <router-link to="/About" tag="btn">
            <v-btn outline round color="white" class="hidden-md-and-down">
                O nas
            </v-btn>
        </router-link>
        <router-link to="/Liczby" tag="btn">
            <v-btn outline round color="white" class="hidden-md-and-down">
                Liczby
            </v-btn>
        </router-link>
    </v-container>
</template>
