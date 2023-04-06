<template>
    <v-card :height="height" class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <slot name="front"/>
            </div>
            <div class="flip-card-back">
                <slot name="back"/>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    props: ['height']
}
</script>

<style scoped>
.flip-card {
    background-color: transparent;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.3s cubic-bezier(.25, .7, .25, 1);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.flip-card-back {
    transform: rotateY(180deg);
}
</style>