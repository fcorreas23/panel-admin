<template>
    <div class="menu">
        <v-navigation-drawer app clipped v-model="drawer">
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <v-avatar color="orange darken-4">
                            <v-icon dark> mdi-account-circle </v-icon>
                        </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Username</v-list-item-title>
                        <v-list-item-subtitle>Bienvenido</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item-group>
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <v-btn block @click="logout">Logout</v-btn>
            </template>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>PANEL ADMINISTRACION</v-toolbar-title>
        </v-app-bar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
                item: 0,
                items: [
                    { text: 'Proyectos', icon: 'mdi-database', to: 'Projects'},
                    { text: 'Ensambles', icon: 'mdi-database', to: 'Assemblys'},
                    { text: 'Especies', icon: 'mdi-database', to: 'Species'},
                    { text: 'Usuarios', icon: 'mdi-account-multiple', to: 'Users'}
                ]
            }
        },

        methods: {
            logout() {
                alert("LOGOUT")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>