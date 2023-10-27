<template>
    <!-- SigninButton component -->
    <SigninButton v-if="!isGoogleLoggedIn" :user="user" @updateUser="updateUser" class="not-logged-in"/>
    <GoogleLogin v-if="!isSigninButtonLoggedIn" :callback="Login"/>
    <button v-if="isGoogleLoggedIn" @click="Logout">Se déconnecter de Google</button>
</template>

<script>

    import {decodeCredential, GoogleLogin} from 'vue3-google-login'
    import SigninButton from '../components/SigninButton.vue'

    export default {
        
        components: {
        GoogleLogin,
        SigninButton
        },
        data() {
            return {
                isGoogleLoggedIn: false,
                isSigninButtonLoggedIn: false
            }
        },
        methods: {
            async Login(reponse) {
                let user = decodeCredential(reponse.credential)
                console.log("Je suis connecté " + user)
                this.isGoogleLoggedIn = true
                setTimeout(250)
            },
            updateUser(user) {
                console.log("Je suis connecté " + user)
                this.isSigninButtonLoggedIn = true
            },
            Logout() {
                this.isGoogleLoggedIn = false
                console.log("Je suis déconnecté de Google")
            }
        }
    }
</script>