<script>
 import FallArt from "$lib/images/fall.png"
 import BandPhoto from "$lib/images/band-orange.jpg"
</script>

<div id="div-content" class="relative bg-white">
    <div id="div-fall" class="py-32 gap-20 place-items-center grid grid-cols-1 md:grid-cols-2">
        <div class="w-4/5 lg:w-2/3">
            <img src={FallArt} class="object-fit shadow-lg" alt="Another Forest">
        </div>

        <div class="grid grid-cols-1 place-items-center content-center text-center">
            <p class="font-serif text-[50px]">DEBUT EP </p>
            <p class="font-title text-[80px]">FALL</p>
            <p class="font-serif text-[50px]"> OUT NOW!</p>
            <!-- <div class="text-lg text-slate-500 w-32 border-green-300 border-solid border-2 rounded-2xl p-5 mt-5 font-serif hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-700 transition-all duration-200">SPOTIFY</div> -->
        </div>
    </div>

    <div class="grid grid-cols-1 place-items-center">
        <div class="w-3/5 h-[400px] mb-10">
            <iframe title="spotify-embed" style="border-radius:12px" src="https://open.spotify.com/embed/artist/0YXSigMGqfDvBAtzqED2Zs?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>

    <div id="div-bio" class="grid grid-cols-1 content-center place-items-center my-10 gap-10">
        <p class="text-[32px] md:text-[40px] font-serif text-zinc-500 text-center w-2/3">Who are we?</p>
        <p class="text-[16px] md:text-[24px] font-serif text-zinc-700 text-center w-2/3">
            Another Forest is a four-piece rock band exploring the boundaries of the genre using their unique mix of female vocals, grinding guitars and catchy choruses. What started for Renske (vocals) and Levi (drums) as a living-room concert on the second floor of a student flat, has grown to be a raging tinnitus machine with the inclusion of Sil (bass) and Thomas (guitar). Their songs take you on an adventure through lush riffs, intense singing, deep bass and powerful drums, yet they are always paired with a whiff of musical ‘je ne sais quoi’. This way, Another Forest aims to reach the top of the music scene and no one will stop them.
        </p>
    </div>

    <!-- <div class="text-lg">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi elit, egestas vitae leo sit amet, aliquet consectetur ex. Ut malesuada, nibh in tincidunt tristique, mi elit dignissim dui, non venenatis libero velit sit amet felis. Donec hendrerit dolor et sem volutpat consectetur. Donec vitae vehicula nisi. Cras ut lorem et ligula vestibulum pretium. Mauris tempus ut sem a dignissim. Aliquam dignissim quis tortor a pulvinar. Vivamus bibendum, quam eget congue consectetur, nunc nisi elementum leo, non maximus enim lorem ac erat. Fusce non ex at nibh vehicula maximus. Fusce non ante orci.
    Nullam finibus posuere tellus, ut finibus diam. Nunc ac ex ut velit rhoncus lacinia. Nulla faucibus tellus sit amet sapien elementum scelerisque. Maecenas vel arcu eget velit pulvinar ornare. Praesent iaculis, diam porttitor rhoncus ullamcorper, massa diam pharetra leo, id ultrices purus nisl a massa. Pellentesque id nulla eu ex vulputate pretium et ac ligula. Etiam nec vestibulum nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mauris ex, scelerisque at tincidunt iaculis, suscipit ut risus. Sed et nibh nec odio posuere vestibulum. Integer pellentesque pretium odio, vitae convallis leo scelerisque id. Curabitur sed nisl erat.
    Cras imperdiet nibh sit amet imperdiet sagittis. Pellentesque a vehicula est, tempor ullamcorper felis. Vestibulum ut nibh faucibus, pulvinar nulla ac, venenatis nulla. Donec lobortis neque ac suscipit facilisis. Quisque nec lectus vitae magna pretium rhoncus consequat a tortor. Nam fringilla, tellus eu pretium posuere, sem magna efficitur est, imperdiet ultrices sapien ligula non felis. Morbi eget bibendum odio. Phasellus dignissim finibus quam quis tempor. Integer eu maximus sapien. Sed placerat auctor ipsum, nec aliquam odio pellentesque sed. Aliquam malesuada arcu vitae luctus feugiat. Mauris nisi mauris, aliquet nec pharetra elementum, volutpat vitae felis. In sollicitudin massa ac tellus pulvinar feugiat. Sed efficitur purus risus, ultrices ullamcorper dolor euismod vel.
    </div> -->

    <div class="w-full my-20 grid grid-cols-1 place-items-center content-center">
       <img class="w-3/5 md:w-1/2 object-contain shadow-lg" src={BandPhoto} alt="Another Forest">
    </div>

    <div id="div-links" class="bg-rose-900 text-white mt-10 grid grid-cols-4 content-center place-items-center text-center">
        <a class="w-full h-full transition-all duration-300 hover:bg-rose-950 p-5" target="_blank" href="https://open.spotify.com/artist/0YXSigMGqfDvBAtzqED2Zs?si=BrwbqRsZQ6mnvVcc0Q-olg"><i class="fa-brands fa-spotify text-[50px]"></i></a>
        <a class="w-full h-full transition-all duration-300 hover:bg-rose-950 p-5" target="_blank" href="https://www.instagram.com/anotherforestband/"><i class="fa-brands fa-instagram text-[50px]"></i></a>
        <a class="w-full h-full transition-all duration-300 hover:bg-rose-950 p-5" target="_blank" href="https://www.facebook.com/profile.php?id=61564336377201"><i class="fa-brands fa-facebook text-[50px]"></i></a>
        <a class="w-full h-full transition-all duration-300 hover:bg-rose-950 p-5" target="_blank" href="https://www.tiktok.com"><i class="fa-brands fa-tiktok text-[50px]"></i></a>
    </div>

</div>
