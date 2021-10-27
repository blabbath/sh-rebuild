<template>
    <div cds-layout="p-t:lg">
        <cds-divider></cds-divider>
        <div cds-layout="m-y:lg">
            <p cds-text="section">HELP</p>
            <ul>
                <li v-for="info in infos" :key="info" cds-layout="p-b:lg">
                    <p cds-text="message" cds-layout="p-b:md">
                        <a :href="info.url">{{ info.name }}</a>
                    </p>
                    <p cds-text="body">{{ info.extra }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infos: [
                {
                    name: 'Sentinel Hub Data',
                    url: 'https://docs.sentinel-hub.com/api/latest/data/',
                    extra: 'Find more information about the different data sources and exmaples.',
                },
                {
                    name: 'Sentinel Hub API',
                    url: 'https://docs.sentinel-hub.com/api/latest/reference/',
                    extra: 'Detailed API documentation for the Sentinel Hub API.',
                },
                {
                    name: 'Custom Scripts',
                    url: 'https://custom-scripts.sentinel-hub.com/#sentinel-3',
                    extra: 'This repository contains a collection of custom scripts for Sentinel Hub, which can be fed to the services via the URL.',
                },
                {
                    name: 'EVALSCRIPT',
                    url: 'https://docs.sentinel-hub.com/api/latest/evalscript/',
                    extra: 'Documentation for EVALSCRIPT V3.',
                },
            ],
        };
    },
};
</script>

<style scoped>
ul {
    padding: 0;
}
ul li {
    list-style: none;
}
</style>
