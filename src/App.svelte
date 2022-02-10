<script>
import { marked } from 'marked';
import { onMount } from 'svelte';

  let markdown = "";
  let edit = false;

  onMount(() => {
	  console.log('mounted App.svelte');
	  console.log(window.location.search);
	  //console.log('db: ', firebase);
	  if (window.location.search == '?superdupersecretpassword') {
		  console.log('gotem');
		edit = true;
	  }
  });
</script>

<main>
	<div class="preview">{@html marked(markdown)}</div>
	{#if edit}
		<div class="editor-container">
			<div class="editor-head"><span>Editor</span><button>Publish</button></div>
			<textarea bind:value={markdown} placeholder="Enter markdown here"/>
		</div>
	{/if}
</main>

<style>
	* {
		box-sizing: border-box;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.preview {
		background: green !important;
		padding: 36px;
		overflow: auto;
		width: 100%;
	}

	.editor-container {
		height: 300px;
		width: 100%;
		background: blue;
	}
	
	textarea {
		background: #292929;
		color: white;
		font-size: 14px;
		font-family: monospace, Roboto;
		border: none;
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 36px;
	}

	textarea:focus, input:focus {
		outline: none;
	}

	
	.editor-head {
		background: #212121;
		color: white;
		margin: 0px;
		font-size: 1.2rem;
		display: flex;
		height: 64px;
		justify-content: space-between;
		align-items: center;
		padding: 0px 24px;
	}

	button {
		border-radius: 36px;
		background: green;
		color: white;
		margin: 0px;
		border: none;
		padding: 6px 12px;
		font-size: 18px;
		font-weight: bold;
		transition: 100ms;
		border: 3px solid green;
	}

	button:hover {
		cursor: pointer;
		color: green;
		border: 3px solid green;
		background: #212121;
	}
	
	:global(body) {
		padding: 0;
	}
</style>