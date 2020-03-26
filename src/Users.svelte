<script>
    import { db } from "./firestore.js"
    import User from './User.svelte'
    import Login from './Login.svelte'
    import {storedUser} from './stores.js'


    let users = [] 

    let email = ''
    let name = ''
        
    let user = ''
     

    db.collection('users').orderBy('email').onSnapshot(  data => {
      users = data.docs, console.log('db users ', users)
    })

   
    async function addUser () {
      const created = new Date().getTime()
      await db.collection('users').add({created,email, name})
      email = ''
      name = ''
    }

</script>

<!-- ############################-->

 
{#if $storedUser}   
<div class="user">
  <form on:submit|preventDefault={addUser}>
      <input type = "text" bind:value={email}>
      <input type = "text" bind:value={name} >
      <!-- <input type = "file" on:change={uploadImage} > -->
      <button>Add</button>
  </form>
</div>

<!-- <div>
  <img src={imaddr} alt="" width="80" height="80">
  <span on:click = {deleteImage} >X</span>
</div> -->

<div id="users">
USERS
    {#each users as xuser }
    <div>{JSON.stringify(xuser.data())}</div> <!-- Xuser is an object -->
      <User id={xuser.id}  user={xuser.data()} />   
      
    {/each}
</div>      

{:else}
  No user
{/if}   

 