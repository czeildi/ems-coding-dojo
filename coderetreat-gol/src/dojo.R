step <- function(list_of_living_cells) {
	if (all_neighboring(list_of_living_cells)) {
		list_of_living_cells[2]
	} else {
		list()
	}
}

all_neighboring <- function(list_of_living_cells) {
	if (length(list_of_living_cells) > 0) {
		indices = map_dbl(list_of_living_cells, 2)
		max(indices) - min(indices) == (length(indices) - 1)
	} else {
		FALSE
	}
}