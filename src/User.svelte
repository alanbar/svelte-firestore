<script>
    import {db} from './firestore.js'
    export let id = ''
    export let user = {}

    async function deleteUser () {
        await db.collection('users').doc(id).delete()
    }

    async function updateUser () {
        await db.collection('users').doc(id).update({
            "email":user.email,
            "name":user.name
        })
    }


</script>

<div class="user">
   
    <input on:input={updateUser} type="text" bind:value={user.email}>
    <input on:input={updateUser} type="text" bind:value={user.name}>
    <!-- <img src={user.imaddr} alt="" width="80" height="80"/> -->
    <button on:click={deleteUser}>Delete</button>
    
</div>
