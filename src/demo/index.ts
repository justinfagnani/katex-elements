import '../index.js';

const input = document.querySelector('#input-1') as HTMLTextAreaElement;
const code = document.querySelector('#code-1')!;
const el = document.querySelector('#el-1')!;

input.addEventListener('input', () => {
  const text = input.value;
  code.textContent = text;
  el.textContent = text;
});


console.log('shadowRoot\n', el.shadowRoot!.querySelector('#container')!.innerHTML);
