import { takeEvery, call, put } from "redux-saga/effects";
import { getJoke } from "../../../api/requests/norris-api";
import { hideLoader, putJoke, showLoader } from "../action-creators/actions";
import { LOAD_JOKE } from "../../../redux/action-types/action-types";

function* workerLoadJoke() {
  yield put(showLoader());
  const joke = yield call(getJoke);
  yield put(putJoke(joke));
  yield put(hideLoader());
}
export function* watchLoadJoke() {
  yield takeEvery(LOAD_JOKE, workerLoadJoke);
}
