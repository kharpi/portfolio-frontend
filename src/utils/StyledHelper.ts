export function StyledHelper<T>(defaultV: T, prop?: T): T {
	return prop ? prop : defaultV;
}
