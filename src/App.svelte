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
	{#if edit}
	<div class="editor-container">
		<div class="editor-head"><span>Editor</span><button>Publish</button></div>
		<textarea bind:value={markdown} placeholder="Enter markdown here"/>
	</div>
	{/if}
	<div class="preview">
		<div class="output">{@html marked(markdown)}</div>
	</div>
</main>

<style>
	* {
		box-sizing: border-box;
	}

	main {
		background: #212121;
		display: flex;
		height: 100vh;
		width: 100%;
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}

	.preview {
		background: #eee;
		display: flex;
		justify-content: center;
		overflow: auto;
		width: 50vw;
	}

	.output {
		margin-top: 160px;
		width: 30vw;
	}

	.editor-container {
		width: 50vw;
	}
	
	textarea {
		background: #292929;
		color: white;
		font-size: 14px;
		font-family: monospace, Roboto;
		border: none;
		height: calc(100% - 64px);
		width: 100%;
		margin: 0;
		padding: 32px;
		border-radius: none;
		resize: none;
		margin-top: 64px;
	}

	textarea:focus, input:focus {
		outline: none;
	}

	
	.editor-head {
		position: fixed;
		width: 50%;
		background: #212121;
		color: white;
		margin: 0px;
		font-size: 1.2rem;
		display: flex;
		height: 64px;
		justify-content: space-between;
		align-items: center;
		padding: 0px 12px 0px 24px;
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