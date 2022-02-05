<script>
  import { marked } from 'marked'

  let markdown = ""
</script>

<main>
	<h1>Markdown Editor</h1>
	<textarea bind:value={markdown} placeholder="Enter markdown here"/>
	<div class="preview">{@html marked(markdown)}</div>
</main>

<style>
	textarea, .preview {
		box-sizing: border-box;
		display: block;
		width: 100%;
	}
	
	textarea {
		font-family: monospace, Roboto;
		height: 25%;
		border: none;
		margin: 0;
		padding: 1rem;
	}
	
	.preview {
		height: 75%;
		padding: 2rem;
		border-top: solid 2px #888;
	}
	
	h1 {
		background: #e1e1e1;
		margin: 0px;
		padding: 0.8rem;
		font-size: 1.2rem;
	}
	
	:global(body) {
		padding: 0;
	}
</style>