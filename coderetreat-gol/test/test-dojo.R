context("game of life")


test_that("no one lives if no one lived before", {
	expect_equal(
		list(),
		step(list_of_living_cells = list())
	)
})

test_that("if only one person lives, she dies", {
	expect_equal(
		list(),
		step(list_of_living_cells = list(c(0, 1)))
	)
})

test_that("if three neighboring cells live, only middle stays alive", {
	expect_equal(
		list(c(0, 2)),
		step(list_of_living_cells = list(c(0, 1), c(0, 2), c(0, 3)))
	)
})

test_that("if three cells live far from each other they all die", {
	expect_equal(
		list(),
		step(list_of_living_cells = list(c(0, 0), c(0, 5), c(0, 9)))
	)
})