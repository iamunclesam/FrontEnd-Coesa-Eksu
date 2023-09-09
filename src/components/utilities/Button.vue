<template>

  <button class="duration-300 " :class="{
    primary:theme === 'primary' ,
    secondary:theme ==='secondary',
    banner:theme ==='banner',
   outline:theme ==='outline'
    }">
{{content}}

  </button>
</template>

<script>
export default {
name:"Button",
props: ['theme','content']
}
</script>

<style lang="scss" >
$primary-color : #0e9f6e;


button.primary{
background:$primary-color;
font-size: small;
color:#fff;
border-radius:4px;
padding:10px 16px ;
margin-bottom:16px;
}
button.primary:hover{
    background: #7DAB2E7f;
    

}





button.banner{
  background:$primary-color;
padding:10px 16px;
width:50%;
color:white;
font-weight:bold;
font-size:large;

}
button.banner:hover{
    background: #7DAB2E7f;
    

}
button.outline{
  background:white;
font-size: small;
border:1px solid $primary-color;
color:$primary-color;
border-radius:4px;
padding:10px 16px ;
margin-bottom:16px;

}
button.outline:hover{
    background: #7DAB2E7f;
    

}

@media screen and (min-width: 735px) {
    button.banner{
width:30%;
    }
button.primary{
    margin-bottom:0;
}

}

</style>