<template>
    <div>
        <Navbar/>
        <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12">
                <BlogHeader/>                
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12">
                <BlogBody/>
            </div>
        </div>        
        <BlogFooter/>                
    </div>
</template>

<script>
import BlogHeader from '@/components/blog/Header.vue'
import BlogFooter from '@/components/blog/Footer.vue'
import BlogBody from '@/components/blog/Body.vue'
import Navbar from '@/views/CommonNavbar.vue';
    export default {
        components: {
            BlogHeader,
            BlogBody,
            BlogFooter,
            Navbar
        },
        
    }
</script>

<style lang="scss" scoped>

</style>