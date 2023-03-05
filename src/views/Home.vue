<template>
    <v-container>
        <div style="margin: 100px auto 100px auto; max-width: 500px;" class="text-center">
            <h1 style="font-size: 43px;">
                develop <v-icon size="x-small" icon="mdi-wrench" />,
                deploy <v-icon size="x-small" icon="mdi-source-merge" />,
                study <v-icon size="x-small" icon="mdi-chart-line-variant" />,
                monetize <v-icon size="x-small" icon="mdi-piggy-bank" />
            </h1>
            <h1 class="mt-10">
                <v-icon icon="mdi-atom" />nominal
            </h1>
        </div>
        <v-card theme="dark" class="mb-10">
            <h2 class="pa-5"><v-icon size="x-small" icon="mdi-wrench" /> develop</h2>
            <v-divider />
            <div class="pa-5">
                <v-card class="pa-5 mb-5">
                    <v-chip theme="light" color="primary" label size="small">grifpkg</v-chip> easily define both free and paid dependencies for game servers, keep them up-to-date, spin-up temporary instances, and more
                </v-card>
                <v-card class="pa-5">
                    <v-chip theme="light" color="primary" label size="small">playtics</v-chip> create customized web and game experiences, such as creating custom checkout flows, login systems, game data syncing, permission control, and more
                </v-card>
            </div>
        </v-card>
        <v-card theme="dark" class="mb-10">
            <h2 class="pa-5"><v-icon size="x-small" icon="mdi-source-merge" /> deploy</h2>
            <v-divider />
            <div class="pa-5">
                <v-card class="pa-5 mb-5">
                    <v-chip theme="light" color="primary" label size="small">grifpkg</v-chip> automatically republish your plugins on software platforms instead of having to publish every update on every site on a regular basis
                </v-card>
                <v-card class="pa-5">
                    <v-chip theme="light" color="primary" label size="small">playtics</v-chip> automatically or manually powerful game servers at a record price, with extremely quick setup times, amazing reliability, and a high amount of dedicated compute power
                </v-card>
            </div>
        </v-card>
        <v-card theme="dark" class="mb-10">
            <h2 class="pa-5"><v-icon size="x-small" icon="mdi-chart-line-variant" /> study</h2>
            <v-divider />
            <div class="pa-5">
                <v-card class="pa-5 mb-5">
                    <v-chip theme="light" color="primary" label size="small">grifpkg</v-chip> get detailed download statistics for your software, and determine quickly determine if the software you use on your server is on the path of being abandonware
                </v-card>
                <v-card class="pa-5">
                    <v-chip theme="light" color="primary" label size="small">playtics</v-chip> get macro and micro analysis for your community. easily determine player retention, gameplay performance, player interactions, community popularity, and more
                </v-card>
            </div>
        </v-card>
        <v-card theme="dark" class="mb-10">
            <h2 class="pa-5"><v-icon size="x-small" icon="mdi-piggy-bank" /> monetize</h2>
            <v-divider />
            <div class="pa-5">
                <v-card class="pa-5 mb-5">
                    <v-chip theme="light" color="primary" label size="small">grifpkg</v-chip> get money from sponsored download pages, donation links and widgets, and sponsored messages when installing or updating your software
                </v-card>
                <v-card class="pa-5">
                    <v-chip theme="light" color="primary" label size="small">playtics</v-chip> sell one-time or reccurent in-game perks or community badges via your webstore, create web designs for other playtics customers, and get paid from your supporters
                </v-card>
            </div>
        </v-card>
        <div style="max-width: 500px;margin:auto" class="text-center my-10 py-10">
            <h1 style="font-size: 43px;">
                start improving your workflow and getting paid for your hobbies
            </h1>
        </div>
        <v-row>
            <v-col md="6" cols="12">
                <v-card variant="tonal" color="primary" class="pa-7 text-center">
                    <h2 class="mb-3">grifpkg</h2>
                    <p>Easily develop manage, publish and monetize game addons</p>
                    <v-btn href="https://grifpkg.io" class="mt-5" icon="mdi-open-in-new"/>
                </v-card>
            </v-col>
            <v-col md="6" cols="12">
                <v-card variant="tonal" color="primary" class="pa-7 text-center">
                    <h2 class="mb-3">playtics</h2>
                    <p>Easily monetize, host and study your gaming community</p>
                    <v-btn href="https://purecore.io" class="mt-5" icon="mdi-open-in-new"/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>