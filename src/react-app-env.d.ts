/// <reference types="react-scripts" />
//Replace <mp4> with the extension name of your choice
declare module "*.mp4" {
	const _default: string;
	export default _default;
}