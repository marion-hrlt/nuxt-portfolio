<template>
	<div>
		<h1>Marion Portfolio</h1>
		<ul>
			<li v-for="project in projects" :key="project.id">
				<p>Test Initial API</p>
				<img :src="config.baseUrl + project.attributes.image.data.attributes.url" alt="" />
			</li>
		</ul>
	</div>
</template>

<script setup>
	const {find} = useStrapi();
	const config = useRuntimeConfig();

	const responseProjects = await find("projects?populate=*");
	const projects = responseProjects.data;
</script>
