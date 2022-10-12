<script setup lang="ts">
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="columns">
                <div class="column is-5">
                    <a class="title">YassLeDev</a>
                    <p>{{$t('whoami.title')}}</p>
                </div>
                <div class="column is-7">
                    <div class="columns">
                        <div class="column is-4"></div>
                        <!-- <div class="column is-4">
                            <div class="menu">
                                <div class="menu-label">Section</div>
                                <ul class="menu-list">
                                    <li><a>Mes projets</a></li>
                                    <li><a>A propos de moi</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div> -->
                        <div class="column is-4">
                            <div class="menu">
                                <div class="menu-label">{{$t('footer.find')}}</div>
                                <ul class="menu-list">
                                    <li><a target="_blank" href="https://discord.gg/QJZEDyXNUZ"><img
                                                src="https://img.icons8.com/color/22/000000/discord-logo.png" />Discord</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.twitch.tv/yassledev"><img
                                                src="https://img.icons8.com/color/22/000000/twitch--v2.png" />Twitch</a>
                                    </li>
                                    <li><a target="_blank"
                                            href="https://www.youtube.com/channel/UCtX4LUXaLolnbcljuwvqV3Q"><img
                                                src="https://img.icons8.com/color/22/FA5252/youtube-play.png" />Youtube</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="column is-4">
                            <div class="menu">
                                <div class="menu-label">{{$t('footer.social')}}</div>
                                <ul class="menu-list">
                                    <li><a target="_blank" href="https://github.com/yassledev"><img
                                                src="https://img.icons8.com/sf-regular-filled/22/000000/github.png" />Github</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/yassine-d-048b80158/"><img
                                                src="https://img.icons8.com/color/22/000000/linkedin-circled--v1.png" />LinkedIn</a>
                                    </li>
                                    <li><a target="_blank" href="https://www.facebook.com/yassledev.fr"><img
                                                src="https://img.icons8.com/fluency/22/000000/facebook-new.png" />Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
img {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5rem;
}
</style>