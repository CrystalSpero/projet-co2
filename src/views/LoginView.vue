<template>
    <!-- Connexion par Microsoft -->
    <button v-if="!isSigninButtonLoggedIn && !isGoogleLoggedIn" @click="signIn" class="base-button">Login with Microsoft</button>
    <button v-if="isSigninButtonLoggedIn" @click="signOut" class="dropdown-item">Se déconnecter de Microsoft</button>

    <!-- Connexion par Google-->
    <GoogleLogin v-if="!isSigninButtonLoggedIn && !isGoogleLoggedIn" :callback="Login"/>
    <button v-if="isGoogleLoggedIn" @click="Logout">Se déconnecter de Google</button>
</template>

<script>

    import {decodeCredential, GoogleLogin} from 'vue3-google-login'

    export default {
        
        components: {
        GoogleLogin,
        },
        data() {
            return {
                isGoogleLoggedIn: false,
                isSigninButtonLoggedIn: false,

                //Pour le SigninButton
                dropdownOpen: false,
            }
        },
        methods: {
            //Méthode de connexion et déconnexion pour Google
            async Login(reponse) {
                let user = decodeCredential(reponse.credential)
                console.log("Je suis connecté " + user.name)
                this.isGoogleLoggedIn = true
                this.$store.commit('setUserName', user.name);
                setTimeout(250)
            },
            Logout() {
                this.isGoogleLoggedIn = false
                this.$store.commit('setUserName', null);
            },

            //Méthode de connexion et déconnexion pour 
            async signIn() {
                await this.$store.dispatch('signIn')
                this.$store.commit('setUserName', this.$store.state.user.name);
                this.isSigninButtonLoggedIn = true
            },
            async signOut() {
                await this.$store.dispatch('signOut')
                this.$store.commit('setUser', null) // Use commit to mutate state
                this.$store.commit('setUserName', null);
                this.isSigninButtonLoggedIn = false
            },
        }
    }
</script>