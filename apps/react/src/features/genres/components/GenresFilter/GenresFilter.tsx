import { memo, FC, useState, useEffect } from "react";
import {
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Checkbox,
	ListItemText,
	SelectChangeEvent,
	Button,
	Typography,
} from "@mui/material";
import { GenresQueryParams } from "@js-camp/react/model/genres-query-params.model";
import useQueryParams from "../../hooks/useQueryParams";
const filters = [
	{ value: GenresQueryParams.FilterType.Genres, label: "Genres" },
	{ value: GenresQueryParams.FilterType.ExplicitGenres, label: "Explicit genres" },
	{ value: GenresQueryParams.FilterType.Themes, label: "Themes" },
	{ value: GenresQueryParams.FilterType.Demographics, label: "Demographics" },
];
const GenresFilterComponent: FC = () => {
		const { getQueryParamByKey, setQueryParams } = useQueryParams();
	const searchParams = getQueryParamByKey("filter") == null ? [] : getQueryParamByKey('filter')?.split(',');
	const [selectedFilters, setSelectedFilters] = useState<string[]>(searchParams);
	const handleChange = (event: SelectChangeEvent<string[]>) => {
		const { value } = event.target;
		const newSelectedFilters = typeof value === "string" ? value.split(",") : value;
		setSelectedFilters(newSelectedFilters);
	};

	const handleReset = (event: React.MouseEvent) => {
		event.stopPropagation();
		setSelectedFilters([]);
	};
	useEffect(() => {
		const filterValue = selectedFilters.length === 0 ? null : selectedFilters;
		setQueryParams({ filter: filterValue });
	}, [selectedFilters]);
	return (
		<FormControl>
			<InputLabel id="multiple-filters-select-label">Select Filters</InputLabel>
			<Select
				labelId="multiple-filters-select-label"
				multiple
				value={selectedFilters}
				onChange={handleChange}
				renderValue={(selected) => (
					<Typography noWrap>
						{selected.map((val) => filters.find((filter) => filter.value === val)?.label).join(", ")}
					</Typography>
				)}
			>
				{filters.map((filter) => (
					<MenuItem key={filter.value} value={filter.value}>
						<Checkbox checked={selectedFilters.indexOf(filter.value) > -1} />
						<ListItemText primary={filter.label} />
					</MenuItem>
				))}
				<MenuItem>
					<Button onClick={handleReset} variant="outlined" color="secondary" style={{ marginTop: "10px" }}>
						Reset
					</Button>
				</MenuItem>
			</Select>
		</FormControl>
	);
};

/** Genre filters component. */
export const GenresFilter = memo(GenresFilterComponent);
