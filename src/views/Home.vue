

<template>
    <v-container>
        <div style="margin: 100px auto 100px auto; max-width: 670px;" class="text-center">
            <h1 class="hero">
                develop <v-icon size="x-small" icon="mdi-wrench" />,<br>
                deploy <v-icon size="x-small" icon="mdi-source-merge" />,
                study <v-icon size="x-small" icon="mdi-chart-line-variant" />,
                monetize <v-icon size="x-small" icon="mdi-piggy-bank" />
            </h1>
            <h2 class="hero mt-10">
                <v-icon icon="mdi-atom" />nominal
            </h2>
        </div>
        <v-row>
            <v-col cols="12" md="6" v-for="feature in features" :key="feature.name">
                <flip-card height="350" theme="dark">
                    <template v-slot:front>
                        <v-card :border="0" variant="tonal" color="primary" class="pa-4 fill-height">
                            <v-container class="fill-height">
                                <v-row align="center" class="fill-height">
                                    <div class="px-13">
                                        <h1 class="mb-2" style="font-size: 3em"><v-icon :icon="feature.icon" /></h1>
                                        <h2 style="font-size:3em"> {{ feature.name }} </h2>
                                    </div>
                                </v-row>
                            </v-container>
                        </v-card>
                    </template>
                    <template v-slot:back>
                        <v-sheet class="fill-height pa-5" color="black">
                            <v-container class="fill-height">
                                <v-row align="center" justify="center" class="fill-height">
                                    <v-card variant="outlined" class="pa-3 mb-4">
                                        <v-chip theme="light" color="primary" label size="small">grifpkg</v-chip> {{
                                            feature.grifpkg
                                        }}
                                    </v-card>
                                    <v-card variant="outlined" class="pa-3">
                                        <v-chip theme="light" color="primary" label size="small">purecore</v-chip> {{
                                            feature.purecore }}
                                    </v-card>
                                </v-row>
                            </v-container>
                        </v-sheet>
                    </template>
                </flip-card>
            </v-col>
        </v-row>
        <div style="max-width: 500px;margin:auto" class="text-center my-10 py-10">
            <h2 class="hero">
                start improving your workflow and get paid for your hobbies
            </h2>
        </div>
        <v-row>
            <v-col md="6" cols="12">
                <v-card :border="0" variant="tonal" color="primary" class="pa-7 text-center">
                    <h1>grifpkg</h1>
                    <h2 class="my-5">Easily develop manage, publish and monetize game addons</h2>
                    <v-btn href="https://grifpkg.com" icon="mdi-open-in-new" />
                </v-card>
            </v-col>
            <v-col md="6" cols="12">
                <v-card :border="0" variant="tonal" color="primary" class="pa-7 text-center">
                    <h1>purecore</h1>
                    <h2 class="my-5">Easily monetize, host and study your gaming community</h2>
                    <v-btn href="https://purecore.io" icon="mdi-open-in-new" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FlipCard from '@/components/FlipCard.vue';

export default {
    components: {
        FlipCard
    },
    data: () => {
        return {
            features: [
                {
                    name: 'develop',
                    icon: 'mdi-wrench',
                    grifpkg: 'easily define both free and paid dependencies for game servers, keep them up-to-date, spin-up temporary instances, and more',
                    purecore: 'create customized web and game experiences, such as creating custom checkout flows, login systems, game data syncing, permission control, and more'
                },
                {
                    name: 'deploy',
                    icon: 'mdi-source-merge',
                    grifpkg: 'automatically republish your plugins in software platforms instead of having to publish every update on every site manually on a regular basis',
                    purecore: 'automatically or manually create powerful game servers at a record price, with extremely quick setup times, amazing reliability, and a high amount of dedicated compute power'
                },
                {
                    name: 'study',
                    icon: 'mdi-chart-line-variant',
                    grifpkg: 'get detailed download statistics for your software, and quickly determine if the software you are using is on the path of being abandonware',
                    purecore: 'get macro and micro analysis for your community. easily determine player retention, gameplay performance, player interactions, community popularity, and more'
                },
                {
                    name: 'monetize',
                    icon: 'mdi-piggy-bank',
                    grifpkg: 'get money from sponsored download pages, donation links and widgets, and sponsored messages when installing or updating your software',
                    purecore: 'sell one-time or reccurent in-game perks or community badges via your webstore, create web designs for other purecore customers, and get paid from your supporters'
                },
            ]
        }
    }
}
</script>