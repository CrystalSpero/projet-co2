<template>
    <div>
        <div v-if="!name">
            <button @click="signIn" class="base-button" :class="buttonColorClass">
            Login with Microsoft
        </button>
        </div>
        <div v-else @click="toggleDropdown">
            {{ name }}
            <div v-if="dropdownOpen" class="dropdown">
                <button @click="signOut" class="dropdown-item">
                    Se déconnecter
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
    data() {
        return {
        name: null,
        color: 'primary',
        dropdownOpen: false,
        }
    },
    methods: {
        async signIn() {
            await this.$store.dispatch('signIn')
            this.name = this.$store.state.user.name;
        },
        async signOut() {
            await this.$store.dispatch('signOut')
            this.$store.commit('setUser', null) // Use commit to mutate state
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        }
    },
    computed: {
        buttonColorClass() {
        // Dynamically apply classes based on the color prop
            return {
                'primary-button': this.color === 'primary',
                'warn-button': this.color === 'warn',
                'danger-button': this.color === 'danger',
            }
        },
    },
    }
</script>