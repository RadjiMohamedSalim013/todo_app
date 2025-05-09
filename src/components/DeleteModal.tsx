"use client";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Supprimer la tâche ?
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Cette action est irréversible. Voulez-vous vraiment continuer ?
        </p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="w-full mr-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="w-full ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
