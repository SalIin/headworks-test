import { takeEvery, call, put } from "redux-saga/effects";
import { getJoke } from "../../api/requests/norris-api";
import { LOAD_JOKE } from "../../redux/action-types/action-types";
import { hideLoader, putJoke, showLoader } from "./actions";

function* workerLoadJoke() {
  yield put(showLoader());
  const joke = yield call(getJoke);
  yield put(putJoke(joke));
  yield put(hideLoader());
}
export function* watchLoadJoke() {
  yield takeEvery(LOAD_JOKE, workerLoadJoke);
}
