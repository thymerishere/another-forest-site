<script>
    import HeaderImage from "$lib/images/brick-wall-bw.jpg"
    import Logo from "$lib/images/logo-transparent.png"
</script>

<div id="div-header" class="overflow-hidden z-0">
    <img src={HeaderImage} class="fixed h-[90vh] w-full object-cover" alt="Another Forest">

    <div id="header-div" class="h-[90vh] w-full">
        <div class="absolute top-[20vh] w-full grid grid-cols-1 place-items-center">
            <img src={Logo} class="h-[100px] md:h-[150px]" alt="Logo">
        </div>
        <div class="absolute top-[10vh] md:top-[20vh] w-full grid grid-cols-1 place-items-center text-center">
            <p1 class="absolute top-[30vh] text-[70px] sm:text-[100px] md:text-[100px] xl:text-[150px] font-title text-white">ANOTHER FOREST</p1>
        </div>
    </div>
</div>
