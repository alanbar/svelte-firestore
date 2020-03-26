<script>
import {db} from './firestore.js'
import firebase from "firebase/app"
import {auth} from './firestore.js'
import {storedUser} from './stores.js'


let user = ''


async function login() {
    const result = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        //.signInWithEmailAndPassword(email, password)
    user = result.user;
    $storedUser = result.user;
    console.log("user...." + JSON.stringify(user))
    console.log("storedUser..." + JSON.stringify($storedUser))
}

async function logout() {
    await firebase.auth().signOut()
    user, $storedUser = null
    console.log(user)
}

</script>

<style>
.profile img.profile {
    width: 50px;
    height: 50px; }
</style>


{#if $storedUser}
  <div class="profile">
    <p>{user.displayName}</p>
    <img class = "profile" src={user.photoURL} alt={'photo of above user'} />
    <button on:click={logout}>Logout</button>
  </div>
{:else}
    <button on:click={login}>Login</button>
{/if}

