import { useNavigate } from "react-router";
import { useRef, useEffect } from "react";
import { Modal } from "bootstrap";

function LogoutButton() {
    const navigate = useNavigate();
    const logoutModalRef = useRef(null);
useEffect(() => {
    const modalElement = logoutModalRef.current;
    new Modal(modalElement, {
        backdrop: 'static',
        keyboard: true
    });
    const handleHide = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };
    modalElement.addEventListener("hide.bs.modal", handleHide);

    return () => {
        modalElement.removeEventListener("hide.bs.modal", handleHide);
    };
}, []);

    const handleLogoutClick = () => {
        Modal.getInstance(logoutModalRef.current).show();
    };

    const confirmLogout = () => {
        Modal.getInstance(logoutModalRef.current).hide();
        navigate('/');
    };

// 取消登出
    const cancelLogout = () => {
        Modal.getInstance(logoutModalRef.current).hide();
    };
    return (
        <>
        <button 
            onClick={handleLogoutClick} 
            type="button" 
            className="btn btn-warning me-2"
        >
            返回前台
        </button>

        <div 
            ref={logoutModalRef} 
            id="logoutModal" 
            className="modal" 
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
                <div className="modal-header border-bottom bg-warning text-dark">
                <h5 className="modal-title fs-4">確認登出</h5>
                <button 
                    onClick={cancelLogout} 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close"
                ></button>
                </div>
                <div className="modal-body p-4">
                    <p className="fs-5 text-center">確認要登出並返回前台嗎？</p>
                </div>
                <div className="modal-footer border-top bg-light">
                <button 
                    onClick={cancelLogout} 
                    type="button" 
                    className="btn btn-secondary"
                >
                    取消
                </button>
                <button 
                    onClick={confirmLogout} 
                    type="button" 
                    className="btn btn-warning"
                >
                    確認登出
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default LogoutButton;