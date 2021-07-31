<template>
    <div>
        暂未开放播客
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    mounted(){
        setTimeout(()=>{
            this.$router.back()
        },3000)
    }
}
</script>
