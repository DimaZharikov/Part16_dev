import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    addPacksThunk,
    deletePackThunk,
    getPacksThunk,
    setCurrentPageAC,
    seTisPrivat,
    setPageSizeAC
} from "../../../Redux/PacksPageReducer/PacksPageReducer";
import {AppRootStateType} from "../../../Redux/Store";
import PacksComponent from "./PacksComponent";
import TableWrapper from "../../../Components/TableWrapper/TableWrapper";
import Paginator from "../../../Common/Paginator/PaginatorComponent";
import SuperSelect from "../../../Components/c5-SuperSelect/SuperSelect";
import Spinner from "../../../Common/preloader/Spinner";
import SuperCheckbox from "../../../Components/c3-SuperCheckbox/SuperCheckbox";
import {Redirect} from "react-router-dom";
import style from './PacksContainer.module.scss'
import SerchPanel from "../../../Components/SerchPanel/SerchPanel";
import SuperButton from "../../../Components/c2-SuperButton/SuperButton";


interface Props {
}

const PacksContainer: FC<Props> = () => {
    const dispatch = useDispatch()

    const totalCoutnOptions = ['4', '7', '10', '20', '50']
    const pageSize = useSelector((state: AppRootStateType) => state.packsPage.pageSize)
    const currentPage = useSelector((state: AppRootStateType) => state.packsPage.currentPage)
    const cardPacks = useSelector((state: AppRootStateType) => state.packsPage.cardPacks)
    const status = useSelector((state: AppRootStateType) => state.packsPage.status)
    const isPrivat = useSelector((state: AppRootStateType) => state.packsPage.isPrivat)
    const userId = useSelector((state: AppRootStateType) => state.profile.profile?._id)
    const isLogin = useSelector((state: AppRootStateType) => state.auth.isLogin)
    const profile = useSelector((state: AppRootStateType) => state.profile.profile)
    const totalCount = useSelector((state: AppRootStateType) => state.packsPage.cardPacksTotalCount)

    const [searchValue, setSearchValue] = useState<string>()

    useEffect(() => {
        if (isPrivat) {
            if (searchValue && searchValue !== '') {
                dispatch(getPacksThunk(pageSize, currentPage, userId, searchValue))
            }else {
                dispatch(getPacksThunk(pageSize, currentPage, userId))
            }

        } else if (searchValue && searchValue !== '') {
            dispatch(getPacksThunk(pageSize, currentPage, undefined, searchValue))
        } else {
            dispatch(getPacksThunk(pageSize, currentPage))
        }
    }, [pageSize, currentPage, isPrivat, userId, searchValue])
    const onDeletePack = (id: string) => {
        dispatch(deletePackThunk(id))
    }
    const onChangeOption = (option: string) => {
        dispatch(setPageSizeAC(+option))
    }
    const onPageChangeHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }
    const onAddPack = (name: string) => {
        dispatch(addPacksThunk(name))
    }
    const setIsPrivatHandler = () => {
        dispatch(seTisPrivat(!isPrivat))
    }
    const onSerchHandler = (value: string) => {
        setSearchValue(value)
    }
    const resetHandler = () => {
        setSearchValue('')
    }

    if (!isLogin || !profile) {
        return <Redirect to={'/auth'}/>
    }
    return (
        <div className={style.main_wrapp}>
            <div className={style.search_panel_main}>
                <SerchPanel placeholderInput={'Serch Name'} onSerch={onSerchHandler} placeholderBtn={'Serch'}
                            classNameInput={'search_panel'}
                />
                <SuperButton onClick={resetHandler}>reset</SuperButton>
            </div>
            <div className={style.isPrivat}><SuperCheckbox onChangeChecked={setIsPrivatHandler}>is
                Privat</SuperCheckbox></div>
            <TableWrapper onClickHandler={onAddPack} title1={'Name'} title2={'Cards count'} title3={'Updated'}>
                {
                    status === 'loading'
                        ? <Spinner/>
                        : cardPacks
                        ? cardPacks.map((item, inx) => {
                            return (
                                <PacksComponent cardPacks={item} key={inx} onDeletePack={onDeletePack}/>
                            )
                        })
                        : null

                }
                <Paginator totalCount={totalCount ? totalCount : 1} pageSize={pageSize} currentPage={currentPage}
                           onPageChangeHandler={onPageChangeHandler}/>
                <div>Page size: <SuperSelect options={totalCoutnOptions} onChangeOption={onChangeOption}/></div>
            </TableWrapper>

        </div>
    )
}


export default PacksContainer