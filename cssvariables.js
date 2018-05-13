const inputs = document.querySelectorAll('.controls input');

function handleUpdate () {
	const suffix = this.dataset.sizing || ''; // need '' for the datas that done have size
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // suffix = px
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
