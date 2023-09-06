interface Config {
	url: string;
}

declare module "mypackages" {
	function init(config: Config): Boolean;
	function exit(code: number): number;
}