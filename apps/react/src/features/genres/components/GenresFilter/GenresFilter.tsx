import { memo, FC, useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Checkbox, ListItemText, SelectChangeEvent } from "@mui/material";
import { GenresQueryParams } from "@js-camp/react/model/genres-query-params.model";

const filters = [
	{ value: "", label: "Default" },
	{ value: GenresQueryParams.FilterType.Genres, label: "Genres" },
	{ value: GenresQueryParams.FilterType.ExplicitGenres, label: "Explicit genres" },
	{ value: GenresQueryParams.FilterType.Themes, label: "Themes" },
	{ value: GenresQueryParams.FilterType.Demographics, label: "Demographics" },
];
const GenresFilterComponent: FC = () => {
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<string[]>) => {
		const { value } = event.target;
		const newSelectedFilters = typeof value === "string" ? value.split(",") : value;
		setSelectedFilters(newSelectedFilters);
		console.log("Selected filters:", newSelectedFilters);
	};

	return (
		<FormControl fullWidth>
			<InputLabel id="multiple-filters-select-label">Select Filters</InputLabel>
			<Select
				labelId="multiple-filters-select-label"
				multiple
				value={selectedFilters}
				onChange={handleChange}
				renderValue={(selected) =>
					selected.map((val) => filters.find((filter) => filter.value === val)?.label).join(", ")
				}
			>
				{filters.map((filter) => (
					<MenuItem key={filter.value} value={filter.value}>
						<Checkbox checked={selectedFilters.indexOf(filter.value) > -1} />
						<ListItemText primary={filter.label} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

/** Genre filters component. */
export const GenresFilter = memo(GenresFilterComponent);
